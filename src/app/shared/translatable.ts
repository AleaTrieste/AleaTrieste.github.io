import { TranslationService } from "../../services/translation.service";

export default abstract class Translatable {
  constructor(protected translationService: TranslationService) { }

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}