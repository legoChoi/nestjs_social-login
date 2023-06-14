import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TagService } from './tag.service';
import { Tag } from './entities/tag.entity';

@Resolver()
export class TagResolver {
  constructor(
    private readonly tagService: TagService, //
  ) {}

  @Mutation(() => Tag, { description: '[TEST] 태그 생성' })
  createTag(
    @Args('name') name: string, //
  ): Promise<Tag> {
    return this.tagService.create({ name });
  }
}
