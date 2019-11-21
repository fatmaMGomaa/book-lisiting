import React from "react";

export const EditModeContext = React.createContext();

class EditModeContextProvider extends React.Component {
  state = {
    editMode: false,
    editModeTheme: { headerColor: "#700002", buttonColor: "#326105" },
    readModeTheme: { headerColor: "#333333", buttonColor: "#ff007e" }
  };
  enableEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  };
  render() {
    return (
      <EditModeContext.Provider
        value={{ ...this.state, enableEditMode: this.enableEditMode }}
      >
        {this.props.children}
      </EditModeContext.Provider>
    );
  }
}

export default EditModeContextProvider;
