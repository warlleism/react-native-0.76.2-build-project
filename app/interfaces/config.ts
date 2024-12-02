export default interface ConfigState {
    theme: Boolean;
    setTheme: (theme?: Boolean) => void;
    size: number | string;
    setSize: (size: number | string) => void;
    currency: string;
    setCurrency: (currency: string) => void;
    initialize: () => void
}
