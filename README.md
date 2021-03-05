# JS-VSCODE-TOYPROJECT 



if (this.props.keyfilter) {
            const {keyfilter} = this.props;
            const regex = KeyFilter.DEFAULT_MASKS[keyfilter] ? KeyFilter.DEFAULT_MASKS[keyfilter] : keyfilter;


            const regexSearch = regex.toString();

            let regExpReplace;

            if (regexSearch.indexOf('[^') != -1) {
                regExpReplace = RegExp(regex.source.replace('[^', "["), `g${regex.flags}`);
            }
            else {
                regExpReplace = RegExp(regex.source.replace(/(.{1})/, "$1^"), `g${regex.flags}`);
            }
            event.target.value = event.target.value.replace(regExpReplace, "");
            return;
        }
