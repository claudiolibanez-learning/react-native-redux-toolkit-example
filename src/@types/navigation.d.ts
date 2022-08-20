
type RootStackParamList = {
  Home: undefined;
  Products: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export { };