import { Jovo } from 'jovo-core';
import { Handler, Intent } from 'jovo-plugin-class-handler';

@Handler({ state: 'some.nested.state' })
export class NestedHandler {
  @Intent()
  TestIntent(jovo: Jovo) {
    return jovo.tell('Hello this is the nested state.');
  }
}
