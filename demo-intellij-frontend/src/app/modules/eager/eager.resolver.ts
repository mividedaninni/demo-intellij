import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class EagerResolver implements Resolve<Array<DatenqualitatDto>> {
    public static RESOLVES = "datenqualitat";

    constructor() {
    }

    resolve(): Array<DatenqualitatDto> {
        return [
            {
                datenqualitatInfoDtoList: [{
                    datenqualitatStatusAndMessageDto: {
                        datenqualitatStatusEnum: "NICHT_OK",
                        optionalErrorMessage: 'Error'
                    },
                    datenqualitatSubSectionEnum: "SUB_SECTION_1"
                }],
                datenqualitatSectionsEnum: "SECTION_A"
            },
            {
                datenqualitatInfoDtoList: [{
                    datenqualitatStatusAndMessageDto: {
                        datenqualitatStatusEnum: "OK",
                        optionalErrorMessage: null
                    },
                    datenqualitatSubSectionEnum: "SUB_SECTION_2"
                }],
                datenqualitatSectionsEnum: "SECTION_B"
            }
        ]
    }

}
