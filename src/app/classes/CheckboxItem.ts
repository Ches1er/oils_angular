export class CheckboxItem {
  value: string;
  label: string;
  fade: boolean;
  checked: boolean;

  constructor(value: any, label: any, fade: boolean, checked?: boolean) {
    this.value = value;
    this.label = label;
    this.fade = fade;
    this.checked = checked ? checked : false;
  }
}
