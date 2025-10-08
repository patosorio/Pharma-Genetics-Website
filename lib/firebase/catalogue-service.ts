import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "./firebase"
import type { GeneticsData } from "@/scripts/catalogue-data"

/**
 * Fetch all genetics from the catalogue collection
 * @returns Array of genetics data ordered by catalogue order
 */
export const getCatalogueData = async (): Promise<GeneticsData[]> => {
  try {
    const catalogueRef = collection(db, "catalogue")
    const q = query(catalogueRef, orderBy("order_in_catalogue", "asc"))
    const querySnapshot = await getDocs(q)
    
    const catalogueData: GeneticsData[] = []
    
    querySnapshot.forEach((doc) => {
      catalogueData.push({
        id: doc.id,
        ...doc.data()
      } as GeneticsData)
    })
    
    return catalogueData
  } catch (error) {
    console.error("Error fetching catalogue data:", error)
    throw new Error("Failed to fetch catalogue data")
  }
}

