import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ListFilter, File } from "lucide-react"
import BarChart from "./bar-chart"

const GrafikPemasukanPengeluaran = () => {
    return (
        <Tabs defaultValue="year">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="year">Tahun</TabsTrigger>
            <TabsTrigger value="month">Bulan</TabsTrigger>
            <TabsTrigger value="week">Minggu</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 gap-1 text-sm"
                >
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Product A
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Product B
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Product C
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <TabsContent value="week">
          <Card>
            <CardHeader className="px-7">
              <CardTitle>Grafik</CardTitle>
              <CardDescription>
                Grafik data pemasukan & pengeluaran per Minggu
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart 
                labels={["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"]} 
                pemasukan={[282, 12, 1, 34, 2, 36, 82]}
                pengeluaran={[81, 73, 82, 749, 92, 12, 111]}
              />
            </CardContent>
          </Card>
        </TabsContent>


        <TabsContent value="month">
          <Card>
            <CardHeader className="px-7">
              <CardTitle>Grafik</CardTitle>
              <CardDescription>
                Grafik data pemasukan & pengeluaran per Bulan
              </CardDescription>
            </CardHeader>
            <CardContent>
            <BarChart 
                labels={["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"]}
                pemasukan={[282, 12, 1, 34]}
                pengeluaran={[43, 49, 721, 12]}
            />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="year">
          <Card>
            <CardHeader className="px-7">
              <CardTitle>Grafik</CardTitle>
              <CardDescription>
                Grafik data pemasukan & pengeluaran per Tahun
              </CardDescription>
            </CardHeader>
            <CardContent>
            <BarChart 
                labels={["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]} 
                pemasukan={[66, 144, 146, 116, 107, 131, 43, 4, 234, 81, 107, 54]}
                pengeluaran={[6, 20, 52, 12, 11, 78, 21, 384, 28, 75, 92, 211, 112]}
            />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    )
}

export default GrafikPemasukanPengeluaran