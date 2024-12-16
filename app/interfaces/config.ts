export default interface ConfigState {
    theme: boolean;
    setTheme: (theme?: boolean) => void;
    size: number | string;
    setSize: (size: number | string) => void;
    currency: string;
    setCurrency: (currency: string) => void;
    initialize: () => void;
};
