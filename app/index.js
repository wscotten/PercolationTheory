import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import TextContainer from './components/TextContainer';
import ProbabilityContainer from './components/ProbabilityContainer';
import ProbabilityText from './components/ProbabilityText';
import RefreshContainer from './components/RefreshContainer';
import RefreshText from './components/RefreshText';
import RecoveryContainer from './components/RecoveryContainer';
import RecoveryText from './components/RecoveryText';
import RowsContainer from './components/RowsContainer';
import RowsText from './components/RowsText';
import ColumnsContainer from './components/ColumnsContainer';
import ColumnsText from './components/ColumnsText';
import StartButton from './containers/StartButton';
import GridBoxes from './containers/Boxes';
import Input from './components/Input';
import { onChange } from './redux';

class App extends PureComponent {
  render() {
    const {
      probability,
      onChange,
      refresh,
      recovery,
      rows,
      columns,
    } = this.props;
    return (
      <View>
        <TextContainer>
          <ProbabilityContainer>
            <ProbabilityText>Probability</ProbabilityText>
            <ProbabilityText>(0 - 1)</ProbabilityText>
            <Input
              onChange={onChange}
              name="probability"
              value={probability}
            />
          </ProbabilityContainer>
          <RefreshContainer>
            <RefreshText>Refresh</RefreshText>
            <RefreshText>(0 - 1)</RefreshText>
            <Input
              onChange={onChange}
              name="refresh"
              value={refresh}
            />
          </RefreshContainer>
          <RecoveryContainer>
            <RecoveryText>Recovery</RecoveryText>
            <RecoveryText>(0 - 1)</RecoveryText>
            <Input
              onChange={onChange}
              name="recovery"
              value={recovery}
            />
          </RecoveryContainer>
          <RowsContainer>
            <RowsText>Rows</RowsText>
            <RowsText>(1 - 100)</RowsText>
            <Input
              onChange={onChange}
              name="rows"
              value={rows}
            />
          </RowsContainer>
          <ColumnsContainer>
            <ColumnsText>Columns</ColumnsText>
            <ColumnsText>(1 - 100)</ColumnsText>
            <Input
              onChange={onChange}
              name="columns"
              value={columns}
            />
          </ColumnsContainer>
          <StartButton />
        </TextContainer>
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
});

const mapDispatchToProps = dispatch => ({
  onChange: (payload) => {
    dispatch(onChange(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
