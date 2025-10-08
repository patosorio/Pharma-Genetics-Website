import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore"
import { db } from "./firebase"

export interface SubscriberData {
  email: string
  ip: string
  subscribedAt: ReturnType<typeof serverTimestamp>
  createdAt: ReturnType<typeof serverTimestamp>
  consentGiven: boolean
  consentTimestamp: ReturnType<typeof serverTimestamp>
}

/**
 * Get the user's IP address
 * @returns The user's IP address or 'unknown' if unavailable
 */
const getUserIP = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    return data.ip || 'unknown'
  } catch (error) {
    console.error('Error fetching IP:', error)
    return 'unknown'
  }
}

/**
 * Check if an email is already subscribed
 * @param email - The email to check
 * @returns True if the email is already subscribed
 */
const isEmailSubscribed = async (email: string): Promise<boolean> => {
  try {
    const subscribersRef = collection(db, "subscribers")
    const q = query(subscribersRef, where("email", "==", email))
    const querySnapshot = await getDocs(q)
    return !querySnapshot.empty
  } catch (error) {
    console.error('Error checking subscription:', error)
    return false
  }
}

/**
 * Subscribe a user to the newsletter
 * @param email - The email address to subscribe
 * @returns The document ID of the created subscriber
 * @throws Error if subscription fails or email is already subscribed
 */
export const subscribeToNewsletter = async (email: string): Promise<string> => {
  try {
    // Check if email is already subscribed
    const alreadySubscribed = await isEmailSubscribed(email)
    if (alreadySubscribed) {
      throw new Error("This email is already subscribed.")
    }

    // Get user's IP
    const ip = await getUserIP()
    
    const subscribersRef = collection(db, "subscribers")
    
    const subscriberDocument: Partial<SubscriberData> = {
      email,
      ip,
      subscribedAt: serverTimestamp(),
      createdAt: serverTimestamp(),
      consentGiven: true,
      consentTimestamp: serverTimestamp()
    }
    
    const docRef = await addDoc(subscribersRef, subscriberDocument)
    
    return docRef.id
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    console.error("Error subscribing to newsletter:", error)
    throw new Error("Failed to subscribe. Please try again.")
  }
}

