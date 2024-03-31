"use client"

import { useEffect } from "react"
import Chart from "chart.js/auto"

interface BarChartProps {
    labels: string[],
    pemasukan: number[],
    pengeluaran: number[],
}

const BarChart = (props: BarChartProps) => {
    useEffect(() => {
        var myChart = new Chart((document.getElementById("myChart") as HTMLCanvasElement), {
            type: 'bar',
            data: {
                labels: props.labels,
                datasets: [
                    {
                        data: props.pemasukan,
                        label: "Pemasukan",
                        backgroundColor: "rgb(68, 211, 63, 0.8)",
                        borderWidth: 0
                    }, 
                    {
                        data: props.pengeluaran,
                        label: "Pengeluaran",
                        backgroundColor: "rgb(256, 66, 66, 0.8)",
                        borderWidth: 0
                    }
                ]
            },
        },)

        return () => myChart.destroy()
    }, [])
    
        
    return (
        <>
            <div className='pt-0 rounded-xl w-full h-fit my-auto'>
                <canvas id='myChart'></canvas>
            </div>
        </>
    )
}

export default BarChart