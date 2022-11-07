import React, { useEffect,useState } from "react";
import FirstImage from "assets/images/firstimage.jpg";
import SecondImage from "assets/images/secondimage.jpg";
import ThirdImage from "assets/images/thirdimage.jpg";
import { useDispatch, useSelector } from "react-redux";
import FourthImage from "assets/images/firstimage.jpg";
import Button from "components/Button";
import TextInput from "components/FormElements/TextInput";
import {
  FirstSection,
  NewSection,
  SubSectionNew,
  CardMainSection,
  Footer,
  Morecontent,
  IconInputField,
  SelectFieldSection,
  ButtonSection
} from "styles/components/Card";
import SelectField from 'components/FormElements/SelectField'
import { getChecklist } from "redux/actions/checklist";
import Card from "./Card";
import { useForm, Controller } from "react-hook-form";
const ChecklistCards = ({ item }) => {
  const dispatch = useDispatch();
  // const allChecklist = useSelector((state) => state.task?.allChecklist);
  const [isCheck, setIsCheck] = useState(false);
  
  const Checklist = [
    { id: 1, time: "3:25 p.m", image: FirstImage },
    { id: 2, time: "3:25 p.m", image: SecondImage },
    { id: 3, time: "3:25 p.m", image: ThirdImage },
    { id: 4, time: "3:25 p.m", image: FourthImage },
  ];
  const {
    handleSubmit,
 
    control,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });
  useEffect(() => {
    dispatch(getChecklist());
  }, []);
  const dealAnalysisArr = [
    {
      label: 'checklist 1',
      value: 'checklist 1',
      id: '0',
    },
    {
      label: 'checklist 2',
      value: 'checklist 2',
      id: '1',
    },
    {
      label: 'checklist 3',
      value: 'checklist 3',
      id: '2',
    },
  ]



  console.log(isCheck)
  return (
    <>
      <NewSection>
        <SubSectionNew>
          <h2> {item.templateName}</h2>
        </SubSectionNew>
        <Footer>
          <Button onClick={() => setIsCheck(!isCheck)}>
          Create Checklist
          
          </Button>
       
          </Footer>
          {!isCheck ? (
            <Morecontent>
             <IconInputField>
            <TextInput
              name=""
              type="text"
              placeholder="Find Something Hereeee"
              control={control}
            />
            
          </IconInputField>
          <SelectFieldSection>
          <SelectField data={dealAnalysisArr} name="dealAnalysis1" control={control} placeholder="Select" />
          </SelectFieldSection>
          <ButtonSection>
          <Button>
         Save
          
          </Button>
          </ButtonSection>
            </Morecontent>
          ) : null}
          </NewSection>
          
      
    
      <CardMainSection>
        <FirstSection>
          {item.checklists
            ?.filter((subItem) => subItem.isActive)
            .map((subItem, index) => {
              return (
                <Card index={index} item={subItem} Checklist={Checklist} />
              );
            })}
        </FirstSection>
      </CardMainSection>

    </>
  );
};

export default ChecklistCards;
