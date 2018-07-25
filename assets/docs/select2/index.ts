import { bindable } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { inject, customAttribute } from 'aurelia-framework';

import 'select2';

@inject(Element)
@customAttribute('select2')
export class Select2Control {
  @bindable placeholder: string = "";
  @bindable multiple: boolean = false;

  constructor(private element: Element) {}

  attached() {
    PLATFORM.global.$(this.element).select2({
      placeholder: this.placeholder,
      multiple: this.multiple
    })
      .on('select2:select', (e) => {
        this.element.dispatchEvent(new Event('change'));
      })
  }

  detached() {
    PLATFORM.global.$(this.element).select2('destroy');
  }

}

