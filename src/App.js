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
  Menu,
  Dropdown,
  Feed,
  Modal,
  Progress,
} from "semantic-ui-react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [segment, setSegment] = useState(false);
  const [state, setState] = useState({ activeItem: "home" });

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
  const handleItemClick = (e, { name }) => {
    setState({ activeItem: name });
  };
  const { activeItem } = state;
  return (
    <div className="App">
      <Menu inverted>
        <Menu.Item
          color="teal"
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          color="yellow"
          name="about"
          active={activeItem === "about"}
          onClick={handleItemClick}
        />
        <Menu.Item>
          <Input icon="search" />
        </Menu.Item>
        <Dropdown item text="Categories">
          <Dropdown.Menu>
            <Dropdown.Item>Electronics</Dropdown.Item>
            <Dropdown.Item>Automotive</Dropdown.Item>
            <Dropdown.Item>Home</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
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

      <Feed>
        <Feed.Event>
          <Feed.Label>
            <img src={logo} alt="" />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>Elliot Fu</Feed.User> added you as a friend
              <Feed.Date>1 Hour Ago</Feed.Date>
            </Feed.Summary>
            <Feed.Meta>
              <Feed.Like>
                <Icon name="like" />4 Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Feed>

      <Modal
        trigger={<Button>Show Modal</Button>}
        header="Reminder!"
        content="Call Benjamin regarding the reports."
        actions={["Snooze", { key: "done", content: "Done", positive: true }]}
      />
      <Divider />
      <Progress percent={11} color="orange" />
    </div>
  );
}

export default App;
