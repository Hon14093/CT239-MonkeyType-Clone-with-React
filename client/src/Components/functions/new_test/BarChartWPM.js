import { Bar } from "react-chartjs-2";

function BarChartWPM(counts) {
    const data = {
        labels: ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90-99', '100-109', '110-119', '120-129', '130-139', '140-149', '150-159'],
        datasets: [
            {
                label: '369',
                data: Object.values(counts),
                backgroundColor: '#e769c3',
                borderWidth: 1
            }

        ]
    }

    const option = {
        responsive: true,
        maintainAspectRatio: false,
    }

    console.log(counts)
    console.log(Object.values(counts));
    return (
        <section className="pt-8">

            <article className="">
                <Bar
                    data={data}
                    options={option}
                ></Bar>
            </article>
        </section>
    )
}

export default BarChartWPM;