import { Space, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { IoStatsChartOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { GrCloudUpload } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import UploadPage from "../components/Upload";
import { useState } from "react";

const Dashboard = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    return (
        <>
            {visible && <UploadPage visible={visible} handleCancel={() => setVisible(false)} />}
            <div className="flex flex-col">
                <Space>
                    <Input className="w-full md:w-[400px] border-black" addonBefore={<SearchOutlined />} placeholder="Search" />
                </Space>
                <div className="mt-2 flex flex-col">
                    <span className="text-[32px] font-bold">Dashboard</span>
                    <div className="flex flex-col w-full">
                        <div className="w-full md:w-[500px] flex flex-col">
                            <div className="flex items-end justify-end w-full">
                                <button onClick={() => setVisible(true)} className="bg-[#454ad6] shadow-lg rounded-md text-white px-4 py-2 w-full md:w-[350px] flex items-center justify-center gap-2">
                                    <GrCloudUpload className="animate-arrow" />
                                    <span>UPLOAD FUTURES MATCHES FILES</span>
                                </button>
                            </div>
                            <div className="w-full mt-4">
                                <table className="w-full border-collapse border shadow-2xl">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="px-4 py-1 text-left">Home</th>
                                            <th className="px-4 py-1 text-left">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="px-4 py-1 text-sm text-left">New Castle</td>
                                            <td className="px-4 py-1 text-sm text-left flex gap-2">
                                                <IoStatsChartOutline onClick={() => { navigate("/home/prediction") }} color="green" cursor={"pointer"} size={18} title="Predict" />
                                                <IoRemoveCircleOutline color="red" cursor={"pointer"} size={18} title="Remove" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
