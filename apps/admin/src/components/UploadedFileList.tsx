import { ImageAsset } from "@/features/overview/types";
import { useDeleteProductImageMutation } from "@/store/services/api/productsApi";
import { Button, Spinner } from "@sip-happens/shared";
import { CircleCheck, X } from "lucide-react"


interface UploadedFileProps {
  fileName: string,
  public_id: string,
  type: string,
  onDelete: () => void
}
const UploadedFile=({fileName,public_id,type,onDelete}:UploadedFileProps) => {
  const [deleteDocument,{isLoading}]=useDeleteProductImageMutation()

  const handleDelete=async()=>{
    try {
      console.log({public_id,type});
      const res= deleteDocument({public_id,type}).unwrap()
      console.log(res);
      onDelete()
    } catch (error) {
    //   toast.error("Failed to delete document")
      console.error("Error deleting document:", error);
    }
  }
  return (
    <div className='flex h-10 ml-2 md:h-5 min-w-12 justify-center items-center gap-2 py-3 px-1 rounded border border-outline'>
     <CircleCheck size={12} className="text-on-tertiary-container align-middle text-xs shrink-0" />
     <p className='text-[10px] text-primary truncate min-w-0'>{fileName}</p>
     <Button variant={'link'} className='text-xs p-0' disabled={false} onClick={handleDelete} 
     leftIcon={isLoading?<Spinner/>:<X size={12} className="text-on-tertiary-container hover:text-on-error-container" />}
     />
    </div>
  )
}


const UploadedFileList = ({file,handleRemoveFile}:{file:ImageAsset,handleRemoveFile:() => void} ) => {
    console.log("file", file);
  return (
    <div className='grid gap-2 grid-cols-2 md:grid-cols-3 w-full'>
        {file && <UploadedFile  fileName={file.url} public_id={file.public_id} type={file.type} onDelete={()=>{ handleRemoveFile()}}/>}
    </div>
  )
}

export default UploadedFileList