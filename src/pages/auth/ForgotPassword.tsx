import { Input, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import { MdKeyboardArrowLeft } from "react-icons/md";

const ForgotPassword = () => {
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-center bg-slate-100'>
           {/*  <div className="absolute inset-0 z-0 w-full flex justify-center items-center h-screen overflow-hidden">
                <img src="/images/login.png" alt="Image d'arrière-plan" className="h-full w-full" style={{ opacity: '' }} />
            </div> */}
            <div className='flex  items-center justify-center h-screen'>
                <Card bordered={false} style={{ width: 400, paddingBottom: 5 }}>
                    <div className='flex flex-col items-center justify-center'>
                        <img src="/images/logoStr.png" alt="" className='h-20' />
                    </div>
                    <div className=' flex flex-col items-center justify-center mt-3'>
                        <span className="font-bold text-[16px] border-b">Mot de passe oublié ? <span className='text-[22px]'></span></span>
                        <span className='text-[10px]'>Entrez votre Email nous vous enverrons des instructions pour reinitialiser votre mot de passe</span>
                        <Space direction="vertical" className='mt-4 w-full'>
                            <div className='w-full'>
                                <span className='text-[12px]'>Email</span>
                                <Input
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
                                    className='h-[45px] text-[12px] shadow-sm'
                                    placeholder="Entrez votre email" />

                            </div>
                            <button onClick={() => navigate('/home')} className='mt-2 bg-blue-300 h-[45px] space-x-2 w-full shadow-md flex items-center justify-center hover:bg-blue-100 transform transition duration-300 hover:scale-105'>
                                <span className='text-blue-900 font-bold text-[16px]'>Recevoir code de réintialisation</span>
                            </button>
                            <div className='w-ful flex items-center justify-center text-[12px] text-blue-700 cursor-pointer'>
                               <Link to="/"><span className='flex items-center justify-center'><MdKeyboardArrowLeft size={18} className='' /> <span>Retour à la page de connexion</span></span></Link> 
                            </div>

                        </Space>
                    </div>
                    <div className="flex flex-col border-t items-center justify-center mt-6 cursor-pointer">
                        <span className="text-[9px]">Powered by Dev4Diversity</span>
                        <span className="text-[9px]">© Copyright {new Date().getFullYear()}</span>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ForgotPassword;
