package demo.dto;

public class DatenqualitatInfoDto {

    private final DatenqualitatSubSectionEnum datenqualitatSubSectionEnum;
    private final DatenqualitatStatusAndMessageDto datenqualitatStatusAndMessageDto;

    private DatenqualitatInfoDto(DatenqualitatInfoDtoBuilder builder) {
        this.datenqualitatSubSectionEnum = builder.datenqualitatSubSectionEnum;
        this.datenqualitatStatusAndMessageDto = builder.datenqualitatStatusAndMessageDto;
    }

    public DatenqualitatSubSectionEnum getDatenqualitatSubSectionEnum() {
        return datenqualitatSubSectionEnum;
    }

    public DatenqualitatStatusAndMessageDto getDatenqualitatStatusAndMessageDto() {
        return datenqualitatStatusAndMessageDto;
    }


    public static final class DatenqualitatInfoDtoBuilder {

        private final DatenqualitatSubSectionEnum datenqualitatSubSectionEnum;
        private DatenqualitatStatusAndMessageDto datenqualitatStatusAndMessageDto;

        public DatenqualitatInfoDtoBuilder(DatenqualitatSubSectionEnum datenqualitatSubSectionEnum) {
            this.datenqualitatSubSectionEnum = datenqualitatSubSectionEnum;
        }

        public DatenqualitatInfoDtoBuilder withStatusAndMessage(DatenqualitatStatusAndMessageDto datenqualitatStatusAndMessageDto) {
            this.datenqualitatStatusAndMessageDto = datenqualitatStatusAndMessageDto;
            return this;
        }

        public DatenqualitatInfoDto build() {
            return new DatenqualitatInfoDto(this);
        }
    }
}
