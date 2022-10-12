import React from "react";
import { NavBarContainer,
  NavSection,
  FirstSection,
  SecondSection,
  SecondSubSection,
  IconInputField,
  Footer,
  Profile,
 } from "styles/components/Navbar";
 import TextInput from "components/FormElements/TextInput";
 import FirstImage from "assets/images/firstimage.jpg";
 import { useForm, Controller } from "react-hook-form";
 import Search from "assets/SVG/Search";
 import Button from "components/Button";
  const NavBar = () => {
    const {
      handleSubmit,
      formState: { errors },
      control,
    } = useForm({
      mode: "onSubmit",
      reValidateMode: "onBlur",
      shouldFocusError: true,
    });
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
        <SecondSubSection>
          <Profile><h4>Admin</h4><h5>Shivam</h5></Profile>
          <img src={FirstImage} alt="FirstImage" />
        </SecondSubSection>
      </SecondSection>
    </NavSection>
  );
      }
export default NavBar;
