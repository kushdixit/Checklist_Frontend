import React,{useEffect,useState} from "react";
import { useForm, Controller } from "react-hook-form";

import CheckboxInput from "components/FormElements/CheckboxInput";
// import AlertModal from 'components/AlertModal';
import { useDispatch } from 'react-redux';
import {BodyContainer, FormBody} from "styles/pages/CheckList";
import {getChecklistBySubcategory} from "redux/actions/checklist"

const CheckList = () => {
  const dispatch = useDispatch()
  let [getResponse,setResponse]=useState()

//   const [modal, setModal] = useState(false)
//   const [modalContent, setModalContent] = useState('')
//   const [modalLink, setModalLink] = useState('/')
//   const toggleModal = () => setModal(!modal)
//   let title = ''

  const {
    // setValue,
    // handleSubmit,
    // formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    // resolver: yupResolver(VALIDATION_SCHEMA),
    shouldFocusError: true,
  });

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const response = await dispatch(getChecklistBySubcategory(1))
    if(response?.error){
        console.log("response==",response?.data?.message)
        // setModalContent(response?.data?.message)
        // setModalLink('')
        // toggleModal()
    }else{  
        // API Success Response
        setResponse(response?.data)
    }
    
  }
  
     //Sub Task List attached
    const subList =(index)=> getResponse[index]?.subTasks.map((task,subIndex)=>{
        return <div key={subIndex}>
            <Controller
                name={"subTask"+index+''+subIndex}
                control={control}
                render={({ field }) => (
                    <CheckboxInput
                        className="checkBox"
                        label={task?.subTaskName}
                        {...field}
                    />
                )}
            />
        </div>;
    });

    // Task List attached
    const lists = getResponse?.map((task,index)=>{
        return <div key={index}>
                    <Controller
                        name={"task"+index}
                        control={control}
                        render={({ field }) => (
                            <CheckboxInput
                                className="checkBox"
                                label={task?.taskName}
                                {...field}
                            />
                        )}
                    />
                <div style={{'padding-left': '90px'}}>
                 {subList(index)}
                </div>
            </div>;
    });
    const formFields = () => {
        return (
            <FormBody>
                <div>
                    {lists}
                </div>
            </FormBody>
        );
    };

    return (
        <>
          <BodyContainer>
           {formFields()}
          
           {/* <AlertModal
            className="AlertModalSection"
            isOpen={modal}
            toggle={toggleModal}
            title={title}
            content={modalContent}
            link={modalLink}
            />    */}
          </BodyContainer> 
               
        </>
    );
}
export default CheckList;