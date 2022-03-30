package demo.dto;

import java.util.List;

public class DatenqualitatDto {

    private DatenqualitatMainSectionEnum datenqualitatSectionsEnum;
    private List<DatenqualitatInfoDto> datenqualitatInfoDtoList;

    public DatenqualitatDto() {
    }

    public DatenqualitatDto(DatenqualitatMainSectionEnum datenqualitatSectionsEnum, List<DatenqualitatInfoDto> datenqualitatInfoDtoList) {
        this.datenqualitatSectionsEnum = datenqualitatSectionsEnum;
        this.datenqualitatInfoDtoList = datenqualitatInfoDtoList;
    }

    public DatenqualitatMainSectionEnum getDatenqualitatSectionsEnum() {
        return datenqualitatSectionsEnum;
    }

    public void setDatenqualitatSectionsEnum(DatenqualitatMainSectionEnum datenqualitatSectionsEnum) {
        this.datenqualitatSectionsEnum = datenqualitatSectionsEnum;
    }

    public List<DatenqualitatInfoDto> getDatenqualitatInfoDtoList() {
        return datenqualitatInfoDtoList;
    }

    public void setDatenqualitatInfoDtoList(List<DatenqualitatInfoDto> datenqualitatInfoDtoList) {
        this.datenqualitatInfoDtoList = datenqualitatInfoDtoList;
    }
}
