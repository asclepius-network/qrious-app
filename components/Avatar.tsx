import React from "react";
import styled from "styled-components/native";
import { connect } from "react-redux";

interface IAvatarProps extends StateProps, DispatchProps {
  updateName: any;
}

interface IAvatarState {
  photo: string;
}

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: "UPDATE_NAME",
        name: name
      })
  };
}

class Avatar extends React.Component<IAvatarProps, IAvatarState> {
  state = {
    photo: "../assets/avatar-default.jpg"
  };

  componentDidMount() {
    fetch("https://uinames.com/api/?ext")
      .then(response => response.json())
      .then(response => {
        this.setState({ photo: response.photo });
        this.props.updateName(response.name);
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
`;
