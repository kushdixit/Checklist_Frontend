import React from "react";
import {  Section,DataWrapper,
    Heading,
    ButtonWrapper,
    ModalButton,
    SecondSection,
    SecondSubSection,
    IconInputField,
    IconWrapper,} from "styles/components/Navbar";

  
    
const BurgerModal = ({ notify }) => {
  // const {
  //   handleSubmit,
  //   formState: { errors },
  //   control,
  // } = useForm({
  //   mode: "onSubmit",
  //   reValidateMode: "onBlur",
  //   shouldFocusError: true,
  // });

  return (
   <Section>
    <DataWrapper >
         {/* <ModalButton onClick={notify}>Yes</ModalButton> */}
       
                <SecondSection>
          {/* {search && (
            <IconInputField>
              <TextInput
                name=""
                type="text"
                placeholder="Find Something Here"
                control={control}
              />
              <IconWrapper>
                <SearchNew />
              </IconWrapper>
            </IconInputField>
          )}
          {search && (
            <Footer>
              <Button
                className="button"
                handleClick={() => newTemplateHandler()}
              >
                {`+ ${buttonType}`}
              </Button>
            </Footer>
          )}
          {state?.showEditable && (
            <div>
              <Button
                handleClick={() =>
                  dispatch({ type: SET_IS_EDITABLE, payload: !taskEditable })
                }
              >
                {`${taskEditable ? "Done" : "Edit"}`}
              </Button>
            </div>
          )}
          <ImageSubSection>
            <SecondSubSection>
              <Profile>
                <h4>{firstName}</h4>
              </Profile>
              <button className="button" onClick={() => setIsGood(!isGood)}>
                <InitialsWrapper>
                  <div>
                    {firstName[0]} {lastName[0]}
                  </div>
                </InitialsWrapper>
              </button>
            </SecondSubSection>
            {isGood ? (
              <Morecontent>
                <Logout style={{ width: "15px", marginRight: "0.25rem" }} />
                <ContentItem onClick={() => toggleab(true)}>Logout</ContentItem>
              </Morecontent>
            ) : null}
          </ImageSubSection> */}
        </SecondSection>
 
   
  </DataWrapper>
  </Section>
  );
};

export default BurgerModal;
