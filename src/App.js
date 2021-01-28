import { useState } from "react";
import {
  Button,
  Container,
  Divider,
  Segment,
  Header,
  Icon,
  Image,
  Input,
  Label,
  Form,
  List,
  Dimmer,
  Loader,
  Placeholder,
  Step,
} from "semantic-ui-react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [segment, setSegment] = useState(false);

  const steps = [
    {
      key: "shipping",
      icon: "truck",
      title: "Shipping",
      description: "Choose your shipping options",
    },
    {
      key: "billing",
      active: true,
      icon: "payment",
      title: "Billing",
      description: "Enter billing information",
    },
    { key: "confirm", disabled: true, icon: "info", title: "Confirm Order" },
  ];

  return (
    <div className="App">
      <Header as="h1">First Header</Header>
      <Header as="h2">Second Header</Header>
      <Header as="h3">Third Header</Header>

      <Container textAlign="left">
        <Button onClick={() => setSegment(!segment)}>Click</Button>
        {segment && <Segment>This is a segment</Segment>}
        <Button primary>Primary Button</Button>
        <Divider />
        <Button basic>Basic button</Button>

        <Icon name="cart arrow down" />
        <Divider />

        <Header as="h3" icon>
          <Icon name="headphones" />
          Headphones
          <Header.Subheader>Put on your headphones</Header.Subheader>
        </Header>
        <Header color="blue">
          <Image circular src={logo} /> React logo
        </Header>
        <Header as="h2" disabled>
          Disabled Header
        </Header>
        <Divider />
        <Input size="huge" />
        <Input disabled placeholder="disabled" />
        <Input loading placeholder="loading" />
        <Input label="search" icon="search" />
        <Divider />
        <Input
          action={{
            color: "teal",
            icon: "play",
            content: "action",
            labelPosition: "right",
          }}
        />
        <Label as="a" color="yellow" image>
          <img src={logo} alt="" />
          Joe
          <Label.Detail>Friend</Label.Detail>
        </Label>
      </Container>
      <Form>
        <Form.Field>
          <input type="text" />
          <Label pointing prompt>
            Please enter a name
          </Label>
        </Form.Field>
      </Form>
      <Image
        fluid
        size="small"
        label={{ as: "a", corner: "right", icon: "heart" }}
        src={logo}
      />
      <Segment textAlign="left">
        <List items={["Apples", "Pears", "Oranges"]} />
        <List.Item icon="users" content="Semantic UI" />
        <List.Item icon="marker" content="New York, NY" />
        <List.Item
          icon="mail"
          content={
            <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
          }
        />
      </Segment>
      <Dimmer>
        <Loader content="Loading" />
      </Dimmer>
      <Placeholder>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>

      <Step.Group items={steps} />
    </div>
  );
}

export default App;
