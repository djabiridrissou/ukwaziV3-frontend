import { Button, Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
    const navigate = useNavigate();

    return (
        <div className='flex h-screen '>
            <div className='bg-gray-400 flex flex-col w-1/2  relative'>
                <div className="absolute inset-0 z-0 w-full flex justify-center " style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <img src="/images/reset.png" alt="Image d'arrière-plan" className="w-full h-auto object-cover" />
                </div>
            </div>
            <div className='w-1/2 flex flex-col px-[280px] bg-[#1A1C4B] justify-center text-white'>
                <div className='flex flex-col'>
                    <span className='text-white font-bold text-[40px]'>Forgot password</span>
                    <span className='mt-1 text-[12px]'>Please enter your email address to have a new password</span>
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
                    </Space>
                </div>
                <Button className='mt-8 bg-white h-[45px] shadow-lg'>
                    <span className='text-blue-900 font-bold text-[20px]'>Submit</span>
                </Button>
                <div className='flex items-center justify-center mt-6'>
                    <span onClick={() => navigate('/')} className='cursor-pointer'>Remember password ?<span className='pl-2 font-bold'>Login</span></span>
                </div>

            </div>
        </div>
    );
};

export default ForgotPassword;
