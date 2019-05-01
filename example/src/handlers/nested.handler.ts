import {Handler, Intent} from 'jovo-plugin-class-handler';
import {Jovo} from 'jovo-core';

@Handler({state: 'some.nested.state'})
export class NestedHandler {

    @Intent()
    TestIntent(jovo: Jovo) {
        return jovo.tell('Hello this is the nested state.');
    }
}
