function convToMaps(address: string | null, city: string, state: string, zipCode: string): string | undefined {
    if (address !== null) {
        let a = address.replaceAll(" ", "+");
        a += ",";
        let c = city.replaceAll(" ", "+");
        c += ",";

        return(`https://www.google.com/maps/search/?api=1&query=${a}+${c}+${state}+${zipCode}`);
    }
}

export default convToMaps;
