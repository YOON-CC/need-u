package com.junocode.needu.entity;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Member {
	private String mid, nickname, email, password, join_date;
}
