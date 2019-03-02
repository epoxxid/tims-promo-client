import React from 'react';

class Filters extends React.Component {
  handleMaxPriceChanged(e) {
    const {filter} = this.props;
    const val = e.target.value ? parseFloat(e.target.value) : '';
    return this.props.onFilterSet({
      ...filter,
      maxPrice: val
    });
  };

  handleActiveOnlyChanged(e) {
    const {filter} = this.props;
    return this.props.onFilterSet({
      ...filter,
      activeOnly: e.target.checked
    });
  };

  render() {
    const { filter }  = this.props;

    return (
      <section className="Filters">
        <div className="Filters-container">
          <input
            onChange={e => this.handleActiveOnlyChanged(e)}
            checked={filter.activeOnly}
            type="checkbox"/>&nbsp;Только активные
        </div>
        <div className="Filters-container">
          До суммы:&nbsp;
          <input
            onChange={e => this.handleMaxPriceChanged(e)}
            value={filter.maxPrice}
            type="text"/>
        </div>
      </section>
    );
  };
}

export default Filters;