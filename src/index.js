module.exports = function toReadable(number) {
    if (number == 0) {
        return "zero";
    } else {
        let ar = [
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen"
        ];
        let arr = [
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety"
        ];
        let ss;
        if (number > 99) {
            let a = (number - (number % 100)) / 100;
            ss = ar[a - 1] + " " + "hundred";
            if (number % 100 != 0) {
                ss = ss + " ";
            }
            if (number % 100 > 19) {
                let a = number % 10;
                let b = ((number - a) / 10) % 10;
                ss = ss + arr[b - 2];
                if (number % 10 != 0) {
                    ss = ss + " ";
                }
            }
            if (number % 10 != 0 && number % 100 > 19) {
                let c = number % 10;
                ss = ss + ar[c - 1];
            }
            if (number % 100 < 20 && number % 100 != 0) {
                let d = number % 100;
                ss = ss + ar[d - 1];
            }
        } else {
            if (number < 20) {
                let f = number % 100;
                ss = ar[f - 1];
            }
            if (number > 19) {
                let a = number % 10;
                let b = ((number - a) / 10) % 10;
                if (a != 0) {
                    ss = arr[b - 2] + " " + ar[a - 1];
                } else {
                    ss = arr[b - 2];
                }
            }
        }

        return ss;
    }
};
