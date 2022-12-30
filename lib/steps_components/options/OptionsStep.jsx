import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import OptionElement from './OptionElement';
import Options from './Options';
import OptionsStepContainer from './OptionsStepContainer';

class OptionsStep extends Component {
  onOptionClick = async ({ value, onClick, awaitOnClick }) => {
    const { triggerNextStep } = this.props;
    if (onClick && typeof onClick === 'function') {
      if (awaitOnClick) {
        await onClick()
      } else {
        onClick()
      }
    }
    triggerNextStep({ value });
  };

  renderOption = option => {
    const { bubbleOptionStyle, step } = this.props;
    const { user } = step;
    const { value, label, optionData, onClick, awaitOnClick } = option;

    return (
      <Option key={value} className="rsc-os-option">
        <OptionElement
          className="rsc-os-option-element"
          style={bubbleOptionStyle}
          user={user}
          onClick={() => this.onOptionClick({ value, onClick, awaitOnClick })}
          {...optionData}
        >
          {label}
        </OptionElement>
      </Option>
    );
  };

  render() {
    const { step } = this.props;
    const { options } = step;

    return (
      <OptionsStepContainer className="rsc-os">
        <Options className="rsc-os-options">
          {Object.keys(options).map(key => options[key]).map(this.renderOption)}
        </Options>
      </OptionsStepContainer>
    );
  }
}

OptionsStep.propTypes = {
  bubbleOptionStyle: PropTypes.objectOf(PropTypes.any).isRequired,
  step: PropTypes.objectOf(PropTypes.any).isRequired,
  triggerNextStep: PropTypes.func.isRequired
};

export default OptionsStep;
