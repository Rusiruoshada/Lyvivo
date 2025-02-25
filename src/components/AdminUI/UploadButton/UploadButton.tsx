import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { UploadListType } from "antd/es/upload/interface";

interface UploadButtonProps {
  disable?: boolean;
  listType?: UploadListType;
  name?: string;
}

const props: UploadProps = {
  name: "file",
  action: "https://localhost:8000/api/addNewItem",
  headers: {
    authorization: localStorage.getItem('isLoginSuccess') || '',
  },
  beforeUpload: (file) => {
     const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error(`${file.name} is not a png or jpeg file`);
    }
    return isJpgOrPng || Upload.LIST_IGNORE;
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadButton: React.FC<UploadButtonProps> = ({ disable, name , listType }) =>{
return (
  <Upload {...props} disabled={disable} name={name} listType={listType}>
    <Button className="hover:!border-[var(--adminPrimaryColor)] hover:!text-[var(--adminPrimaryColor)]" icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
)};

export default UploadButton;
