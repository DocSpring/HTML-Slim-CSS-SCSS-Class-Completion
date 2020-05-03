import * as vscode from "vscode";
import CssClassDefinition from "../../common/css-class-definition";
import IParseEngine from "../common/parse-engine";
import ISimpleTextDocument from "../common/simple-text-document";
import HamlClassExtractor from "../common/haml-class-extractor";

class HamlParseEngine implements IParseEngine {
    public languageId: string = "haml";
    public extension: string = "haml";

    public async parse(textDocument: ISimpleTextDocument): Promise<CssClassDefinition[]> {
        const code: string = textDocument.getText().replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, "");
        return HamlClassExtractor.extract(code);
    }
}

export default HamlParseEngine;
