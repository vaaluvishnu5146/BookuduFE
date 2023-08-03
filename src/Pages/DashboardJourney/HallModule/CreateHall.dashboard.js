import React, { useState } from "react";
import PageLayout from "../layout";
import BasicCard from "../../../SharedComponents/Card/BasicCard";
import Text from "../../../SharedComponents/Texts/Text";
import TextInput from "../Elements/TextInput/TextInput";
import RadioButtonsGroup from "../Elements/RadioGroup/BasicRadio";
import BasicCta from "../Elements/Buttons/BasicCta";

const CREATE_NEW_HALL_API = "http://localhost:5000/mahal/create";

function CreateHallPage() {
  const [hall, setHall] = useState({});

  function handleInput(e) {
    const hallCopy = {
      ...hall,
    };
    console.log(e);
    hallCopy[e.target.id] = e.target.value;
    setHall(hallCopy);
  }
  function handleSubmitForm(e) {
    fetch(CREATE_NEW_HALL_API, {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(hall),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  return (
    <PageLayout pageTitle="Create Hall">
      <BasicCard>
        <Text
          text="Basic Information"
          variant="h5"
          overrides={{
            marginBottom: "20px",
          }}
        />
        <TextInput
          label="Mahal Name"
          id="mahalName"
          name="mahalName"
          onChange={handleInput}
          overrides={{
            width: "350px",
            marginBottom: "10px",
          }}
        />
      </BasicCard>
      <BasicCard>
        <Text
          text="Mahal Features"
          variant="h5"
          overrides={{
            marginBottom: "20px",
          }}
        />
        <RadioButtonsGroup
          label="Parking Facility"
          overrides={{ marginBottom: "20px" }}
          options={[
            { label: "Available", value: true },
            { label: "Not-Available", value: false },
          ]}
          onChange={handleInput}
          id="parking"
        />
        <TextInput
          label="Seating capacity"
          id="seatingCapacity"
          name="seatingCapacity"
          onChange={handleInput}
          overrides={{
            width: "350px",
            marginBottom: "10px",
          }}
        />
        <TextInput
          label="Dining capacity"
          id="diningCapacity"
          name="diningCapacity"
          onChange={handleInput}
          overrides={{
            width: "350px",
            marginBottom: "10px",
          }}
        />
      </BasicCard>
      <BasicCard>
        <Text
          text="Pricing Details"
          variant="h5"
          overrides={{
            marginBottom: "20px",
          }}
        />
        <TextInput
          label="Pricing Per Hour"
          id="pricingPerHour"
          name="pricingPerHour"
          onChange={handleInput}
          overrides={{
            width: "350px",
            marginBottom: "10px",
          }}
        />
        <TextInput
          label="Pricing Per Day"
          id="pricingPerDay"
          name="pricingPerDay"
          onChange={handleInput}
          overrides={{
            width: "350px",
            marginBottom: "10px",
          }}
        />
      </BasicCard>
      <BasicCard>
        <Text
          text="Address Details"
          variant="h5"
          overrides={{
            marginBottom: "20px",
          }}
        />
        <TextInput
          label="Address Line 1"
          id="addressLine1"
          name="addressLine1"
          onChange={handleInput}
          overrides={{
            width: "350px",
            marginBottom: "10px",
          }}
        />
        <TextInput
          label="Address Line 2"
          id="addressLine2"
          name="addressLine2"
          onChange={handleInput}
          overrides={{
            width: "350px",
            marginBottom: "10px",
          }}
        />
        <TextInput
          label="City"
          id="city"
          name="city"
          onChange={handleInput}
          overrides={{
            width: "350px",
            marginBottom: "10px",
          }}
        />
        <TextInput
          label="State"
          id="state"
          name="state"
          onChange={handleInput}
          overrides={{
            width: "350px",
            marginBottom: "10px",
          }}
        />
        <TextInput
          label="Pincode"
          id="pincode"
          name="pincode"
          onChange={handleInput}
          overrides={{
            width: "350px",
            marginBottom: "10px",
          }}
        />
      </BasicCard>
      <BasicCard>
        <Text
          text="Contact Details"
          variant="h5"
          overrides={{
            marginBottom: "20px",
          }}
        />
        <TextInput
          label="Primary Phone Number"
          id="primaryPhone"
          name="primaryPhone"
          onChange={handleInput}
          overrides={{
            width: "350px",
            marginBottom: "10px",
          }}
        />
        <TextInput
          label="Secondary Phone Number"
          id="secondaryPhone"
          name="secondaryPhone"
          onChange={handleInput}
          overrides={{
            width: "350px",
            marginBottom: "10px",
          }}
        />
        <BasicCta
          text={"Create Hall"}
          overrides={{
            width: 150,
            height: 50,
          }}
          onClick={handleSubmitForm}
        />
      </BasicCard>
    </PageLayout>
  );
}

export default CreateHallPage;
