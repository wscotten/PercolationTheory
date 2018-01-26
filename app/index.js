import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import FormContainer from './components/FormContainer';
import TextContainer from './components/TextContainer';
import StartButton from './containers/StartButton';
import GridBoxes from './containers/Boxes';
import Input from './components/Input';
import { onChange } from './redux';
import { startButtonClicked } from './containers/StartButton/reducer';

class App extends PureComponent {
  render() {
    const {
      probability,
      onChange,
      refresh,
      recovery,
      rows,
      columns,
      StartButtonColor,
      onStartClick,
    } = this.props;
    return (
      <View>
        <FormContainer>
          <TextContainer>
            <Text>Probability</Text>
            <Text>(0 - 1)</Text>
            <Input
              onChange={onChange}
              name="probability"
              value={probability}
            />
          </TextContainer>
          <TextContainer>
            <Text>Refresh</Text>
            <Text>(0 - 1)</Text>
            <Input
              onChange={onChange}
              name="refresh"
              value={refresh}
            />
          </TextContainer>
          <TextContainer>
            <Text>Recovery</Text>
            <Text>(0 - 1)</Text>
            <Input
              onChange={onChange}
              name="recovery"
              value={recovery}
            />
          </TextContainer>
          <TextContainer>
            <Text>Rows</Text>
            <Text>(1 - 100)</Text>
            <Input
              onChange={onChange}
              name="rows"
              value={rows}
            />
          </TextContainer>
          <TextContainer>
            <Text>Columns</Text>
            <Text>(1 - 100)</Text>
            <Input
              onChange={onChange}
              name="columns"
              value={columns}
            />
          </TextContainer>
          <StartButton
            StartButtonColor={StartButtonColor}
            onStartClick={onStartClick}
          />
        </FormContainer>
        <GridBoxes />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  probability: state.form.probability,
  refresh: state.form.refresh,
  recovery: state.form.recovery,
  rows: state.form.rows,
  columns: state.form.columns,
  StartButtonColor: state.StartButtonColor,
});

const mapDispatchToProps = dispatch => ({
  onChange: (payload) => {
    dispatch(onChange(payload));
  },
  onStartClick: () => {
    dispatch(startButtonClicked());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
