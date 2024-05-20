export class React {
  constructor(type, props, childern) {
    this.type = type;
    this.props = props;
    this.childern = childern;
  }

  createElement() {
    return {
      type: this.type,
      props: { ...this.props, children: this.childern },
    };
  }
}
