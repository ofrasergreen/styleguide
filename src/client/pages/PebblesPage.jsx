import React from 'react';
import Header from '../../components/molecules/Header/Header';

const Prism = window.Prism; // A global, added with a <script> tag in the HTML template

export const PebbleVariant = ({
    VARIANT_0: {value: 'page-pebbles', description: 'Page Pebble'},
    VARIANT_1: {value: 'page-pebbles page-pebbles--variant-1', description: 'Variant 1'},
    VARIANT_2: {value: 'page-pebbles page-pebbles--variant-2', description: 'Variant 2'},
    VARIANT_3: {value: 'page-pebbles page-pebbles--variant-3', description: 'Variant 3'},
    VARIANT_4: {value: 'page-pebbles page-pebbles--variant-4', description: 'Variant 4'},
    VARIANT_5: {value: 'page-pebbles page-pebbles--variant-5', description: 'Variant 5'}
});

export default class PebblesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            variant: PebbleVariant.VARIANT_0.value
        };

        this.dropdownChange = this.dropdownChange.bind(this);
    }

    dropdownChange(e) {
        e.preventDefault();
        this.setState({variant: e.target.value});
    }

    render() {
        return (
            <div className={this.state.variant}>
                <Header
                    iconUrl="./public/icons/ico_info.svg"
                    runningTitle="Sample page"
                    pageTitle="Information Article"
                    withMask={false}
                    withContentOverlap={false}>
                    <p>
                        On this page you can have a look at the template for an Information Article Page
                        and some of the components in the styleguide combined with each other.
                    </p>

                </Header>

                <div style={{'height': '800px','text-align':'center'}}>
                    <select className="dropdown-list" onChange={this.dropdownChange}>
                        {_.map(PebbleVariant, (variant,i) =>
                            <option key={i} className="dropdown-list__option" value={variant.value}>{variant.description}</option>
                        )}
                    </select>
                </div>
            </div>
        );
    }
}
