import CardUang from "./card-uang"

const InformasiPengeluaran = () => {
  return (
    <>
      <div className="grid pb-4 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <CardUang title="Pengeluaran Hari ini" amount="Rp. 1,000,000,-" subtitle="+10% dari hari lalu"/> 
          <CardUang title="Pengeluaran Bulan ini" amount="Rp. 1,500,000,-" subtitle="+10% dari hari lalu"/> 
          <CardUang title="Pengeluaran Tahun ini" amount="Rp. 1,500,000,-" subtitle="+10% dari hari lalu"/> 
          <CardUang title="Seluruh Pengeluaran" amount="Rp. 33,850,00,-" subtitle="+10% dari hari lalu"/> 
        </div> 
    </>
  )
}

export default InformasiPengeluaran
