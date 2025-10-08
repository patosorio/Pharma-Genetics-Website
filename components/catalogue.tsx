"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText } from "lucide-react"
import type { GeneticsData } from "@/scripts/catalogue-data"
import { downloadFileFromStorage } from "@/lib/download-utils"
import { getCatalogueData } from "@/lib/firebase/catalogue-service"

export function Catalogue() {
  const [showAll, setShowAll] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [catalogueData, setCatalogueData] = useState<GeneticsData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCatalogue = async () => {
      try {
        const data = await getCatalogueData()
        setCatalogueData(data)
      } catch (error) {
        console.error("Error loading catalogue:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCatalogue()
  }, [])

  // Show only first 3 items initially
  const displayedItems = showAll ? catalogueData : catalogueData.slice(0, 3)

  const handleDownloadPDF = async () => {
    if (isDownloading) return
    
    setIsDownloading(true)
    
    try {
      // Download from Firebase storage bucket
      await downloadFileFromStorage(
        'https://storage.googleapis.com/website_catalogue_bucket/catalogue/2025/Fenopharm-2025-Full-Catalogue.pdf',
        'Fenopharm-2025-Full-Catalogue.pdf'
      )
    } catch (error) {
      console.error('Error downloading catalogue:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  const handleDownloadLabAnalysis = () => {
    // Placeholder for lab analysis download functionality
    console.log("Downloading lab analysis...")
  }

  return (
    <section id="catalogue" className="py-16 bg-fenopharm-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-fenopharm-light mb-4 tracking-tight">CATALOGUE 2025</h2>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-fenopharm-light">Loading catalogue...</p>
          </div>
        ) : catalogueData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-fenopharm-light">No genetics available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedItems.map((genetics) => (
              <GeneticsCard key={genetics.id} genetics={genetics} />
            ))}
          </div>
        )}

        <div className="text-center space-y-4">
          {!showAll && catalogueData.length > 3 && (
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              className="bg-fenopharm-light border-fenopharm-light text-fenopharm-dark hover:bg-fenopharm-light/50 px-8"
            >
              View Full Catalogue
            </Button>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="bg-fenopharm-red hover:bg-fenopharm-red/90 text-fenopharm-light px-6 disabled:opacity-50"
            >
              <Download className="h-4 w-4 mr-2" />
              {isDownloading ? "Downloading..." : "Download Catalogue"}
            </Button>
            {/* <Button
              onClick={handleDownloadLabAnalysis}
              variant="outline"
              className="bg-transparent border-fenopharm-light text-fenopharm-light hover:bg-fenopharm-light hover:text-fenopharm-dark px-6"
            >
              <FileText className="h-4 w-4 mr-2" />
              Lab Analysis Report
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

function GeneticsCard({ genetics }: { genetics: GeneticsData }) {
  return (
    <Card className="bg-white/95 backdrop-blur-sm hover:bg-white transition-colors">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="aspect-square bg-fenopharm-light/30 rounded-lg flex items-center justify-center mb-4">
            <img
              src={genetics.imageUrl}
              alt={genetics.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div>
            <h3 className="text-xl font-normal text-fenopharm-dark mb-2">{genetics.name}</h3>
            <p className="text-sm text-fenopharm-gray font-light mb-3">{genetics.short_description}</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-fenopharm-gray">THC:</span>
              <Badge variant="secondary" className="bg-fenopharm-red text-white">
                {genetics.thc}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-fenopharm-gray">Type:</span>
              <span className="text-xs text-fenopharm-dark">{genetics.genotype}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-fenopharm-gray">Flowering:</span>
              <span className="text-xs text-fenopharm-dark">{genetics.time}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-fenopharm-gray">Yield:</span>
              <span className="text-xs text-fenopharm-dark">{genetics.yield}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-fenopharm-light">
            <p className="text-xs text-fenopharm-gray font-light">
              Main Terpenes: {[genetics.main_terpens, genetics.terpene_1, genetics.terpene_2, genetics.terpene_3].filter(Boolean).join(', ')}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
