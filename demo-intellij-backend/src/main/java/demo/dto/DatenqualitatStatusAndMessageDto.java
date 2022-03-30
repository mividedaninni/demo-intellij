package demo.dto;

public class DatenqualitatStatusAndMessageDto {

    private DatenqualitatStatusEnum datenqualitatStatusEnum;
    private String optionalErrorMessage;

    public DatenqualitatStatusAndMessageDto() { }

    public DatenqualitatStatusAndMessageDto(DatenqualitatStatusEnum datenqualitatStatusEnum) {
        this.datenqualitatStatusEnum = datenqualitatStatusEnum;
        this.optionalErrorMessage = null;
    }

    public DatenqualitatStatusAndMessageDto(DatenqualitatStatusEnum datenqualitatStatusEnum, String optionalErrorMessage) {
        this.datenqualitatStatusEnum = datenqualitatStatusEnum;
        this.optionalErrorMessage = optionalErrorMessage;
    }

    public DatenqualitatStatusEnum getDatenqualitatStatusEnum() {
        return datenqualitatStatusEnum;
    }

    public void setDatenqualitatStatusEnum(DatenqualitatStatusEnum datenqualitatStatusEnum) {
        this.datenqualitatStatusEnum = datenqualitatStatusEnum;
    }

    public String getOptionalErrorMessage() {
        return optionalErrorMessage;
    }

    public void setOptionalErrorMessage(String optionalErrorMessage) {
        this.optionalErrorMessage = optionalErrorMessage;
    }
}
