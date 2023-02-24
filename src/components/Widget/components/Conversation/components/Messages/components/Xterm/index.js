import React, { PureComponent } from 'react';
import { XTerm } from 'xterm-for-react';
import { FitAddon } from 'xterm-addon-fit';
import { PROP_TYPES } from 'constants';

class Xterm1 extends PureComponent {
    render() {
        const content = this.props.message.get('content');
        return (
            <div className="rw-snippet">
                <div className="rw-snippet-details">{content}</div>
                <XTerm ref={this.xtermRef} />
            </div>
        );
    }
}

const Xterm = props => {
    const content = props.message.get('content');
    const xtermRef = React.useRef(null);
    const fitAddon = new FitAddon();
    React.useEffect(() => {
        // You can call any method in XTerm.js by using 'xterm xtermRef.current.terminal.[What you want to call]
        xtermRef.current.terminal.writeln(content.replace(/\n/g, '\n\r'));
    }, []);

    return (
        <div style={{ width: '768px' }}>
            <XTerm addons={[fitAddon]} options={{ disableStdin: true }} ref={xtermRef} />
        </div>
    );
};

// Xterm.propTypes = {
//     message: PROP_TYPES.Xterm,
// };

export default Xterm;
