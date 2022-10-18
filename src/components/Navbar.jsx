import React, { useState } from "react";
import {
  NavBarContainer,
  NavSection,
  FirstSection,
  SecondSection,
  SecondSubSection,
  IconInputField,
  Footer,
  Profile,
  Morecontent,
  ContentItem,
  ImageSubSection
} from "styles/components/Navbar";
import TextInput from "components/FormElements/TextInput";
import FirstImage from "assets/images/firstimage.jpg";
import { useForm, Controller } from "react-hook-form";
import Search from "assets/SVG/Search";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";
import { eraseCookie } from "../helpers/cookie";

const NavBar = () => {
  const navigate = useNavigate();
  const [isGood, setIsGood] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });
  const logout = () => {
    eraseCookie("access_token");
    navigate("/");
  };
  return (
    // <NavBarContainer/>
    <NavSection>
      <FirstSection>
        <h1>Checklist</h1>
      </FirstSection>
      <SecondSection>
        <IconInputField>
          <TextInput
            name=""
            type="text"
            placeholder="Find Something Here"
            control={control}
          />
        </IconInputField>
        <Footer>
          <Button className="button">+&nbsp; Create List</Button>
        </Footer>
        <ImageSubSection>
        <SecondSubSection>
          <Profile>
            <h4>Admin</h4>
            <h5>Shivam</h5>
          </Profile>
          <button className="button" onClick={() => setIsGood(!isGood)}><img src={FirstImage} alt="FirstImage" /></button>
        </SecondSubSection>
      
          {isGood ?   <Morecontent>
         <h5>Welcome !</h5>
         <ContentItem
         
         >
           Profile
         </ContentItem>
         <ContentItem
          
         >
          Logout
         </ContentItem>
       
       
     </Morecontent> : null}
        </ImageSubSection>
        <button onClick={logout}>Logout</button>
      </SecondSection>
     
    </NavSection>
  );
};
export default NavBar;
