import { useEffect, useState } from "react";
import { fileData } from "../utils/variables";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart, Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);

const Prediction = () => {
    const [variablesChecked, setVariablesChecked] = useState<any>([]);

    useEffect(() => {
        setVariablesChecked(fileData?.variables?.map((variable: any) => ({
            ...variable,
            checked: false
        })));
    }, []);

    const handleVariableCheckboxChange = (id: any) => {
        setVariablesChecked((prevVariablesChecked: any[]) =>
            prevVariablesChecked.map((variable: any) =>
                variable.id === id ? { ...variable, checked: !variable.checked } : variable
            )
        );
    };

    const dataChart1 = {
        labels: ['Home', 'Away', 'Draw'],
        datasets: [
            {
                label: '',
                data: [50, 32, 18],
                backgroundColor: [
                    'green',
                    'red',
                    'yellow',
                ],
                borderColor: [
                    'rgba(0, 255, 0, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 255, 0, 1)',
                ],
                borderWidth: 1,
                hoverBorderColor: 'white',
            },
        ],
    };

    dataChart1.datasets.forEach((dataset: any) => {
        dataset.datalabels = {
            color: 'black',
            align: 'center',
            offset: 8,
            font: {
                weight: 'bold',
                size: 16,
            },
            formatter: (value: any, context: any) => {
                return (value.toFixed(2)) + '%';
            },
        };
    });

    const dataChart2 = {
        labels: ['Over 2.5', 'Under 2.5'],
        datasets: [
            {
                label: '',
                data: [48, 52],
                backgroundColor: [
                    'blue',
                    'red',
                ],
                borderColor: [
                    'rgba(0, 0, 255, 1)',
                    'rgba(255, 0, 0, 1)',
                ],
                borderWidth: 1,
                hoverBorderColor: 'white',
            },
        ],
    };
    dataChart2.datasets.forEach((dataset: any) => {
        dataset.datalabels = {
            color: 'black',
            align: 'center',
            offset: 8,
            font: {
                weight: 'bold',
                size: 16,
            },
            formatter: (value: any, context: any) => {
                return (value.toFixed(2)) + '%';
            },
        };
    });

    const dataChart3 = {
        labels: ['Yes', 'No'],
        datasets: [
            {
                label: '',
                data: [22, 78],
                backgroundColor: [
                    'blue',
                    'red',
                ],
                borderColor: [
                    'rgba(0, 0, 255, 1)',
                    'rgba(255, 0, 0, 1)',
                ],
                borderWidth: 1,
                hoverBorderColor: 'white',
            },
        ],
    };

    dataChart3.datasets.forEach((dataset: any) => {
        dataset.datalabels = {
            color: 'black',
            align: 'center',
            offset: 8,
            font: {
                weight: 'bold',
                size: 16,
            },
            formatter: (value: any, context: any) => {
                return (value.toFixed(2)) + '%';
            },
        };
    });

    const options = {
        plugins: {
            datalabels: {
                color: 'black',
                align: 'center',
                formatter: (value: any, context: any) => {
                    return context.dataset.data[context.dataIndex] + '%';
                },
                font: {
                    weight: 'bold',
                    size: 16,
                },
            },
        },
    };

    const plugins = [ChartDataLabels];

    return (
        <div className="flex flex-col">
            <div className="mt-2 flex flex-col">
                <span className="text-[32px] font-bold">Prediction</span>
                <div className="flex flex-col w-full mt-4">
                    <div className="flex justify-between mb-8">
                        <div className="chart-container flex flex-col items-center justify-center">
                            <div className="flex flex-col">
                                <span style={{ fontWeight: "bold", fontSize: "12px", }}>Winner</span>
                            </div>
                            <div className=" items-center">
                                <Pie data={dataChart1} options={options} plugins={plugins} />
                            </div>
                        </div>
                        <div className="chart-containe flex flex-col items-center justify-center">
                            <div className="flex flex-col">
                                <span style={{ fontWeight: "bold", fontSize: "12px", }}>2.5</span>
                            </div>
                            <div className="flex max-h-[350px] items-center">
                                <Pie data={dataChart2} options={options} plugins={plugins} />
                            </div>
                        </div>
                        <div className="chart-containe flex flex-col items-center justify-center">
                            <div className="flex flex-col">
                                <span style={{ fontWeight: "bold", fontSize: "12px", }}>Both To Score</span>
                            </div>
                            <div className="flex max-h-[350px] items-center">
                                <Pie data={dataChart3} options={options} plugins={plugins} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-end">
                            <button className="bg-[#1A1C4B] shadow-lg rounded-md text-white px-4 py-2">Search</button>
                        </div>
                        <div className="flex flex-col w-full bg-white shadow-xl border-2 p-2 mr-4 md:mr-10">
                            <div className="flex flex-wrap w-full justify-between">
                                {variablesChecked
                                    .filter((variable: any) => variable?.type === "Home")
                                    .map((variable: any) => (
                                        <div key={variable.id} className="flex items-center w-1/2 sm:w-1/3 lg:w-1/5 my-2">
                                            <input
                                                type="checkbox"
                                                checked={variable.checked}
                                                onChange={() => handleVariableCheckboxChange(variable.id)}
                                                className="w-4 h-4 rounded-lg border border-black hover:border-blue-400 cursor-pointer"
                                            />
                                            <span className="ml-2 text-[12px]">{variable.code}</span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="flex flex-col w-full bg-white shadow-xl border-2 p-2 mr-4 md:mr-10">
                            <div className="flex flex-wrap w-full justify-between">
                                {variablesChecked
                                    .filter((variable: any) => variable?.type === "Away")
                                    .map((variable: any) => (
                                        <div key={variable.id} className="flex items-center w-1/2 sm:w-1/3 lg:w-1/5 my-2">
                                            <input
                                                type="checkbox"
                                                checked={variable.checked}
                                                onChange={() => handleVariableCheckboxChange(variable.id)}
                                                className="w-4 h-4 rounded-lg border border-black hover:border-blue-400 cursor-pointer"
                                            />
                                            <span className="ml-2 text-[12px]">{variable.code}</span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-4 overflow-x-auto overflow-y-auto">
                        <table className="w-full border-collapse border shadow-2xl">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-sm px-4 py-1 text-left">Home</th>
                                    <th className="text-sm px-4 py-1 text-left">Away</th>
                                    <th className="text-sm px-4 py-1 text-left">Score</th>
                                    {variablesChecked
                                        .filter((variable: any) => variable?.checked)
                                        ?.map((variable: any) => (
                                            <th key={variable?.id} className="text-sm px-4 py-1 text-left">{variable.code}</th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="px-4 py-1 text-sm text-left">{fileData?.Home}</td>
                                    <td className="px-4 py-1 text-sm text-left"></td>
                                    <td className="px-4 py-1 text-sm text-left"></td>
                                    {variablesChecked
                                        .filter((variable: any) => variable?.checked)
                                        ?.map((variable: any) => (
                                            <td key={variable?.id} className="text-sm px-4 py-1 text-left">{variable.value}</td>
                                        ))
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prediction;
