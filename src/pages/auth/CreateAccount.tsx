import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import { FaLongArrowAltRight } from 'react-icons/fa';

const CreateAccount = () => {
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-center bg-slate-100'>
            {/* <div className="absolute inset-0 z-0 w-full flex justify-center items-center h-screen overflow-hidden">
                <img src="/images/login.png" alt="Image d'arrière-plan" className="h-full w-full" style={{ opacity: '' }} />
            </div> */}
            <div className='flex  items-center justify-center h-screen'>
                <Card bordered={false} style={{ width: 400, paddingBottom: 5 }}>
                    <div className='flex flex-col items-center justify-center'>
                        <img src="/images/logoStr.png" alt="" className='h-20' />
                    </div>
                    <div className=' flex flex-col items-center justify-center mt-3'>
                        <span className="font-bold text-[16px] border-b">Bienvenue sur Camissa! <span className='text-[22px]'></span></span>
                        <span className='text-[10px]'>L'aventure commence ici 🚀</span>
                        <Space direction="vertical" className='mt-4 w-full'>
                            <div className='w-full'>
                                <span className='text-[12px]'>Nom d'utilisateur</span>
                                <Input
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
                                    className='h-[45px] text-[12px] shadow-sm'
                                    placeholder="Choisissez votre nom d'utilisateur" />

                            </div>
                            <div className='w-full'>
                                <span className='text-[12px]'>Email</span>
                                <Input
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
                                    className='h-[45px] text-[12px] shadow-sm'
                                    placeholder="Entrez votre adresse email" />

                            </div>
                            <div className='mt-2'>
                                <div className='flex w-full justify-between'>
                                    <span className='text-[12px]'>Mot de Passe</span>
                                </div>                                <Input.Password
                                    className='text-[12px] h-[45px] shadow-sm'
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
                                    placeholder="Entrez votre mot de passe"
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </div>
                            <button onClick={() => navigate('/home')} className='mt-2 bg-blue-300 h-[45px] space-x-2 w-full shadow-md flex items-center justify-center hover:bg-blue-100 transform transition duration-300 hover:scale-105'>
                                <span className='text-blue-900 font-bold text-[16px]'>Créer un compte</span>
                                <FaLongArrowAltRight className="animate-arrow pt-1" size={12} />
                            </button>
                            <div className='w-ful flex items-center justify-center text-[12px]'>
                                <span>Vous avez déjà un compte ? <Link className='text-blue-700 hover:underline cursor-pointer' to='/'><span className='text-blue-700 hover:underline cursor-pointer'>Connectez-vous ici</span></Link></span>
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

export default CreateAccount;
