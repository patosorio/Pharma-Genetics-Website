import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "./firebase"

export interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
}

export interface ContactDocument extends ContactFormData {
  createdAt: ReturnType<typeof serverTimestamp>
  status: 'new' | 'read' | 'responded'
}

/**
 * Submit a contact form to Firestore
 * @param formData - The contact form data
 * @returns The document ID of the created contact
 */
export const submitContactForm = async (formData: ContactFormData): Promise<string> => {
  try {
    const contactsRef = collection(db, "contacts")
    
    const contactDocument: Partial<ContactDocument> = {
      ...formData,
      createdAt: serverTimestamp(),
      status: 'new'
    }
    
    const docRef = await addDoc(contactsRef, contactDocument)
    
    return docRef.id
  } catch (error) {
    console.error("Error submitting contact form:", error)
    throw new Error("Failed to submit contact form. Please try again.")
  }
}

