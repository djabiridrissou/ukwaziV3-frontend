import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import { FaLongArrowAltRight } from 'react-icons/fa';
const Login = () => {
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-center bg-slate-100'>
            {/* <div className="absolute inset-0 z-0 w-full flex justify-center items-center h-screen overflow-hidden">
                <img src="/images/login.png" alt="Image d'arrière-plan" className="h-full w-full" style={{ opacity: '' }} />
            </div> */}
            <div className='flex  items-center justify-center h-screen'>
                <Card bordered={false} style={{ width: 400, paddingBottom: 5 }}>
                    <div className='flex flex-col items-center justify-center'>
                        {/*    <span className='border-b-2 border-[#1A1C4B] font-bold text-[12px]'>CMPJ - Sokodé</span>
                        <span className='text-[9px] italic'>Centre Médical du Puits de Jacob</span> */}
                        <img src="/images/logoStr.png" alt="" className='h-20' />
                    </div>
                    <div className=' flex flex-col items-center justify-center mt-3'>
                        <span className="font-bold text-[16px] border-b">Bienvenue sur Camissa! <span className='text-[22px]'></span></span>
                        <span className='text-[10px]'>Connectez-vous à votre compte</span>
                        <Space direction="vertical" className='mt-4'>
                            <div className='w-full'>
                                <span className='text-[12px]'>Nom d'utilisateur ou Email</span>
                                <Input
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
                                    className='h-[45px] text-[12px] shadow-sm'
                                    placeholder="Entrez votre identifiant de connexion" />

                            </div>
                            <div className='mt-2'>
                                <div className='flex w-full justify-between'>
                                    <span className='text-[12px]'>Mot de Passe</span>
                                    <Link to="/forgot-password"><span className='text-[12px] text-blue-700 hover:underline cursor-pointer'>Mot de passe oublié ?</span></Link>
                                </div>

                                <Input.Password
                                    className='text-[12px] h-[45px] shadow-sm'
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
                                    placeholder="Entrez votre mot de passe"
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </div>
                            <button onClick={() => navigate('/home')} className='mt-2 bg-blue-300 h-[45px] space-x-2 w-full shadow-md flex items-center justify-center hover:bg-blue-100 transform transition duration-300 hover:scale-105'>
                                <span className='text-blue-900 font-bold text-[16px]'>Se Connecter </span>
                                <FaLongArrowAltRight className="animate-arrow pt-1" size={12} />
                            </button>
                            <div className='w-ful flex items-center justify-center text-[12px]'>
                                <span>Vous n'avez pas de compte ? <Link to={"/create-account"}><span className='text-blue-700 cursor-pointer hover:underline'>Créer un compte</span></Link></span>
                            </div>
                            
                        </Space>
                    </div>
                    <div className="flex flex-col items-center border-t  justify-center mt-6 cursor-pointer">
                        <span className="text-[9px]">Powered by Dev4Diversity</span>
                        <span className="text-[9px]">© Copyright {new Date().getFullYear()}</span>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Login;
