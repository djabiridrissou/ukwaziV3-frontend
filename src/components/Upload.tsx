import { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Upload, Modal } from 'antd';

const { Dragger } = Upload;

const UploadPage = ({ visible, handleCancel }: any) => {
    const [fileData, setFileList] = useState([]);

    const props: UploadProps = {
        name: 'file',
        multiple: false,
        fileList: fileData,
        beforeUpload() {
            return false;
        },
        onChange(info: any) {
            setFileList(info.fileList);
        },
        onDrop(e) {
            e.preventDefault();
        },
    };

    const handleUpload = () => {
        // const formData = new FormData();
        // fileData.forEach((file: any, index: any) => {
        //     formData.append(`file${index}`, file.originFileObj);
        // });
        //console.log('Uploading files...', formData.getAll('file0'));
        const file: any = fileData[0];
        console.log(file.originFileObj);
    };


    return (
        <Modal
            title="Upload Files"
            open={visible}
            onCancel={handleCancel}
            footer={null}
        >
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    {/* Ajoutez ici un message d'indication sur le type de fichiers acceptés */}
                </p>
            </Dragger>
            <div className='mt-4 w-full flex items-center justify-center'>
                <button disabled={fileData.length === 0} className={`px-4 py-2 text-white shadow-lg ${fileData.length === 0 ? 'bg-gray-400' : 'bg-blue-500'}`} onClick={handleUpload}>Upload</button>
            </div>
        </Modal>
    );
};

export default UploadPage;
