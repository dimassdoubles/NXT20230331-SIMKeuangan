import CardUang from "./card-uang"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"

const InformasiPemasukan = () => {
    return (
        <>
          <div className="grid pb-4 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <CardUang title="Pemasukan Hari ini" amount="Rp. 200,001,-" subtitle="+10% dari hari lalu"/> 
              <CardUang title="Pemasukan Bulan ini" amount="Rp. 4,910,001,-" subtitle="+10% dari hari lalu"/> 
              <CardUang title="Pemasukan Tahun ini" amount="Rp. 4,910,001,-" subtitle="+10% dari hari lalu"/> 
              <CardUang title="Seluruh Pengeluaran" amount="Rp. 45,480,00,-" subtitle="+10% dari hari lalu"/> 
            </div> 
        </>
    )
}

export default InformasiPemasukan

