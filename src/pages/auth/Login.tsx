import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className='flex h-screen '>
            <div className='bg-gray-400 flex flex-col w-1/2 relative'>
                <div className="absolute inset-0 z-0 w-full flex justify-center " style={{ backgroundColor: 'rgba(0, 0, 90, 0.5)' }}>
                    <img src="/images/login.png" alt="Image d'arrière-plan" className="w-full h-auto object-cover" style={{ opacity: '0.5' }} />
                </div>
                <div className="flex-grow flex flex-col justify-center items-center relative">
                    <div className='flex flex-col'>
                        <div className='flex flex-col'>
                            <span className='text-white text-[90px] -ml-10'>‘‘</span>
                            <div className='flex flex-col -mt-[85px]'>
                                <span className='text-white text-[32px]'>
                                    Lorem ipsum lorem ipsum
                                </span>
                                <span className='-mt-4 text-white text-[32px]'>
                                    lorem ipsum lorem ipsum
                                </span>
                                <span className='-mt-4 text-white text-[32px]'>
                                    lorem ipsum lorem ipsum
                                </span>
                                <span className='text-white font-bold text-[32px] mt-2'>
                                    John Doe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-end mb-[60px] ml-10 relative">
                    <div className='flex relative items-center justify-center'>
                        <span className='font-bold text-white text-[50px]'>UKWAZI</span>
                        <span className="bg-[#1A1C4B] h-3 w-3 rounded-full ml-1"></span>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex flex-col px-[280px] bg-[#1A1C4B] justify-center text-white'>
                <div className='flex flex-col'>
                    <span className='text-white font-bold text-[50px]'>Login</span>
                    <span className='mt-3'>Please enter your email and password to access your</span>
                    <span>account.</span>
                </div>
                <div className='flex flex-col mt-8'>

                    <Space direction="vertical">
                        <div>
                            <span className=''>Email</span>
                            <Input
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
                                className='h-[45px] text-[20px]'
                                placeholder="" />
                        </div>
                        <div className='mt-2'>
                            <span className=''>Password</span>
                            <Input.Password
                                className='text-[20px] h-[45px]'
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
                                placeholder=""
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </div>

                    </Space>
                </div>
                <Button onClick={() => navigate('/home')} className='mt-8 bg-white h-[45px] shadow-lg'>
                    <span className='text-blue-900 font-bold text-[20px]'>Continue</span>
                </Button>
                <div className='flex items-center justify-center mt-6'>
                    <span onClick={() => navigate('/forgot-password')} className='font-bold cursor-pointer'>Forgot password ?</span>
                </div>

            </div>
        </div>
    );
};

export default Login;
